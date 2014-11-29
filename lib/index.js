var share = require('share');
var livedb = require('livedb');
var Hoek = require('hoek');
var connect = require('connect');
var serveStatic = require('serve-static');
var Primus = require('primus');
var fs = require('fs');
var http = require('http');
var Duplex = require('stream').Duplex;

var internals = {};

exports = module.exports = internals.Server = function (opts) {

	Hoek.assert(this.constructor === internals.Server, 'Server must be instantiated using new');

	this._opts = Hoek.applyToDefaults(internals.defaults, opts);

	this._backend = livedb.client(livedb.memory());
	this._share = share.server.createClient({
		backend : this._backend
	});

	this._app = connect().use(serveStatic(__dirname + '/client'));
	this._server = http.createServer(this._app);
	this._primus = new Primus(this._server);



	if (!fs.existsSync(__dirname + '/client/client.js')) {
		// create single client.js file

		var shareLib = require('uglify-js').minify([share.scriptsDir + '/share.uncompressed.js',share.scriptsDir + '/json0.js'],{compress: false, mangle: false});
		var clientLib = require('uglify-js').minify([this._primus.library(), shareLib.code], {fromString: true, compress: false, mangle: false});

		fs.mkdirSync(__dirname + '/client');
		fs.writeFileSync(__dirname + '/client/client.js', clientLib.code);

	}
	var _this = this;
	// hook up primus and share
	this._primus.on('connection', function (spark) {
	  // spark is the new connection.
	  	var stream;
		stream = new Duplex({
			objectMode: true
		});
		stream._write = function(chunk, encoding, callback) {
			console.log('s->c ', chunk);
			spark.write(chunk);
			return callback();
		};
		stream._read = function() {};
		stream.headers = spark.headers;
		stream.remoteAddress = spark.remoteAddress;
		spark.on('data', function(data) {
			console.log('c->s ', data);
			var parsed = null;
			try{
				parsed = JSON.parse(data);
			} catch(e) {
				// not sure what to do
			}
			if (parsed !== null) {
				return stream.push(parsed);
			}
		});
		stream.on('error', function(msg) {
			return spark.end(msg);
		});
		spark.on('end', function(reason) {
			stream.push(null);
			stream.emit('close');
			console.log('client went away');
			return spark.end(reason);
		});
		stream.on('end', function() {
			return spark.end();
		});
		return _this._share.listen(stream);
	});
	this._server.listen(this._opts.port);
	console.log("Listening on http://localhost:" + this._opts.port + "/");
};

internals.defaults = {
	port: 7007,
	host: 'localhost'
};

var persistify = require('persistify');
var cacheId;

try {

	cacheId += require(process.cwd() + '/package.json').name;

} catch(e) {

}

module.exports = function(options) {

	var args = [options || {}];

	if(cacheId) {
		args.push({ cacheId: cacheId });
	}

	return persistify.apply(persistify, args);

};

const newman = require('newman');

newman.run({
    collection: require('./collection.json'), // collection file thik ache kina check korun
    // environment: require('./env.json'),  // ei line ta comment/remove korun jodi env.json na thake
    reporters: ['htmlextra'],
    reporter: {
        htmlextra: {
            export: './newman/report.html',
        }
    },
    insecure: true
}, function (err) {
    if (err) { throw err; }
    console.log('✅ Newman run complete with HTML report!');
});
module.exports = {
    spec: ['tests/**/*.ts'],
    package: './package.json',
    extension: ['ts'],
    timeout: 5 * 1000,
    color: true,
    grep: '',
    ignore: [''],
    reporter: 'mochawesome',
    'reporter-option': [
        'reportDir=report',
        'reportFilename=index',
        'reportTitle=GraphQL Test Report',
        'charts=true',
        'code=false',
        'inline=true',
        'autoOpen=false',
        'showPassed=true',
        'showFailed=true',
        'showPending=true',
        'showSkipped=true',
        'showHooks=failed'
    ],
    require: ['ts-node/register'],
    parallel: false,
    recursive: false,
    retries: 0,
    slow: '75',
    sort: false
};
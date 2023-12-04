const Helper = require('@accusoft/document-processing-helper');

async function main()  {
    const documentProcessingHelper = new Helper({
        prizmDocServerBaseUrl: 'https://api.accusoft.com',
        apiKey: 'Pi4WIXFlgaaTqHzWNeW-7fQdqGXET_lS9DgzlNXuGf1s920y02kiXDhWmrKy9Bf5'
    });

    console.log("Started converting")

    // Initialize a conversion
    const output = await documentProcessingHelper.convert({
        input: './small.html',
        outputFormat: 'tiff'
    });

    console.log("File Reading completed")

    // Download the output and save the file
    await output[0].saveToFile('output.tiff');
}

main();
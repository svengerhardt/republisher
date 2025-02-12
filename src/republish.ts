"use strict"

import { program } from 'commander'

import {
    ChatClient,
    OpenAIProvider,
    PromptComposer,
    WebScraperComponent
} from "prompt-composer"

import {Prompts} from "./prompts.js"

(async () => {

    program
        .requiredOption('--url <url>', 'The URL to be republished')
        .parse(process.argv);

    const options = program.opts()
    const url: string = options.url

    let promptComposer = new PromptComposer()

    promptComposer.setStart(Prompts.republishHeadline)

    promptComposer.addComponent(new WebScraperComponent({
        url: url,
    }))

    let prompt = await promptComposer.composePrompt()
    // console.log(prompt)

    const chatClient = new ChatClient(new OpenAIProvider({
        model: 'gpt-4o'
    }))

    console.log('\n')
    await chatClient.streamToStdout(prompt)

})()

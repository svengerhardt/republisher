"use strict"

import { program } from 'commander'

import {
    ChatClient,
    OpenAIProvider,
    PromptComposer,
    TextComponent,
    WebScraperComponent
} from "prompt-composer"

import {Prompts} from "./prompts.js"

(async () => {

    program
      .option('--url <url>', 'The URL to be republished')
      .option('--headline <headline>', 'The headline to be republished')
      .parse(process.argv)

    const options = program.opts()

    if ((options.url && options.headline) || (!options.url && !options.headline)) {
        console.error("Error: Please enter either --url or --headline, but not both.");
        process.exit(1)
    }

    let promptComposer = new PromptComposer()

    if (options.url) {
        promptComposer.setStart(Prompts.republishHeadlineUsingArticle)
        promptComposer.addComponent(new WebScraperComponent({
            url: options.url,
        }));
    } else if (options.headline) {
        promptComposer.setStart(Prompts.republishHeadline)
        promptComposer.addComponent(new TextComponent({
            content: options.headline,
        }))
    }

    let prompt = await promptComposer.composePrompt()
    console.log(prompt)

    const chatClient = new ChatClient(new OpenAIProvider({
        model: 'gpt-4o'
    }))

    console.log('\n')
    await chatClient.streamToStdout(prompt)

})()

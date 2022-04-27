#!/usr/bin/env node
const { program } = require("commander")
const createOptions = require("./lib/core/option")
const createCommand = require("./lib/core/command")

// add params option
createOptions()

// add operate command
createCommand()

program.parse(process.argv)
#!/usr/bin/env node

import minimist from 'minimist'
import { run } from '../managers/react'
import { Script } from '../managers/Script'
import { CONFIG_FILE_NAME } from '../constants'

Script.launch({ configPath: CONFIG_FILE_NAME }, (env) => {
  const args = process.argv.slice(2)
  const argv = minimist(args)

  run(env, argv)
})

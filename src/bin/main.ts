#!/usr/bin/env node

import Liftoff from 'liftoff'
import v8flags from 'v8flags'
import { CONFIG_FILE_NAME } from '../constants'
import { jsVariants } from 'interpret'
import { run } from '../script'

const PlopScaffold = new Liftoff({
  name: 'plop-scaffold',
  extensions: jsVariants,
  v8flags,
})

PlopScaffold.launch({ configPath: CONFIG_FILE_NAME }, run)

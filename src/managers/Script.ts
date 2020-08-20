#!/usr/bin/env node
import { jsVariants } from 'interpret'
import Liftoff from 'liftoff'
import v8flags from 'v8flags'

export const Script = new Liftoff({
  name: 'plop-scaffold',
  extensions: jsVariants,
  v8flags,
})

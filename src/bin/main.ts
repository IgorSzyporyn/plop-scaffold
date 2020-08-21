#!/usr/bin/env node

import { run } from '../managers/main'
import { Script } from '../managers/Script'
import { CONFIG_FILE_NAME } from '../constants'

Script.launch({ configPath: CONFIG_FILE_NAME }, run)

#!/usr/bin/env node

import { run } from '../managers/main'
import { Script } from '../managers/Script'

Script.launch({}, run)

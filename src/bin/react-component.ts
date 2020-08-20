#!/usr/bin/env node

import { run } from '../managers/react-component'
import { Script } from '../managers/Script'

Script.launch({ configPath: '.psgrc.json' }, run)

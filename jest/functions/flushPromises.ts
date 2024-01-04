// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { jest } from '@jest/globals';

export const flushPromises = () => new Promise((jest as any).requireActual("timers").setImmediate);

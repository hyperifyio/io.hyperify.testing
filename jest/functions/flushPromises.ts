// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

export const flushPromises = () => new Promise(jest.requireActual("timers").setImmediate);

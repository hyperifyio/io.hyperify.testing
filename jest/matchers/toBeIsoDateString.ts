// Copyright (c) 2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { createJestPassObject, JestPassObject } from "../types/JestPassObject";
import { explainIsoDateString, explainIsoDateStringWithMilliseconds, isIsoDateString, isIsoDateStringWithMilliseconds } from "../../../core/types/Date";

expect.extend(
    {
        toBeIsoDateStringWithMilliseconds (received: any): JestPassObject | Promise<JestPassObject> {
            if ( isIsoDateStringWithMilliseconds(received) ) {
                return createJestPassObject(true, `Expected '${received}' not to be a valid ISO date string with milliseconds`);
            } else {
                return createJestPassObject(false, `Expected '${received}' to be a valid ISO date string with milliseconds: ${explainIsoDateStringWithMilliseconds(received)}`);
            }
        },
        toBeIsoDateString (received: any): JestPassObject | Promise<JestPassObject> {
            if ( isIsoDateString(received) ) {
                return createJestPassObject(true, `Expected '${received}' not to be a valid ISO date string`);
            } else {
                return createJestPassObject(false, `Expected '${received}' to be a valid ISO date string: ${explainIsoDateString(received)}`);
            }
        }
    }
);

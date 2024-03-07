import { withTheme } from '@rjsf/core';
import { Theme } from '@rjsf/mui';
import { type RJSFSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv6';

const SchemaForm = withTheme(Theme);

const schema: RJSFSchema = {
    title: 'This is my title',
    type: 'object',
    properties: {
        name: {
            type: 'string',
        },
        age: {
            type: 'number',
        },
        isAdult: {
            type: 'boolean'
        },
        hobbies: {
            type: 'array',
            items: {
                type: 'string',
            },
        }
    },
};

export default <SchemaForm schema={schema} validator={validator}/>

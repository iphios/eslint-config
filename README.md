# eslint-config
It is eslint config

## How to use
Add this as dependency in package.json

```
"devDependencies": {
  ...
  "eslint-config-custom": "git+ssh://git@github.com/iphios/eslint-config.git#<commit_id>/<tag_id>"
  ...
}
```

Add below code in `.eslintrc.yml`

```
extends:
  - eslint-config-custom
```

or
```
extends:
  - eslint-config-custom/default
```
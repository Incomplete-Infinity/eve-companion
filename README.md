# eve-companion/

```txtnpx swagger-typescript-api \
  -p ./esi.json \
  -o ./src/api/esi \
  -n index.ts \
  --axios \
  --modular \
  --union-enums

root/
├── docs/               # Your TECH_STACK.md and planning docs
├── img/                # Images and assets
├── src/
│   ├── api/
│   │   └── esi/        # GENERATED Swagger API client
│   │       ├── apis/
│   │       ├── models/
│   │       └── index.ts
│   └── main/           # Your Electron main process code
│   └── renderer/       # Renderer UI and logic
├── style-guide/        # Design docs, style references
├── package.json
├── esi.json            # (optional) local Swagger spec
```

## Other Files
1. [GenerateReadmes.js](./GenerateReadmes.js)
2. [jsdoc.json](./jsdoc.json)
3. [package-lock.json](./package-lock.json)
4. [package.json](./package.json)

## Subfolders
- [docs/](./docs/README.md)
- [img/](./img/README.md)
- [src/](./src/README.md)
- [style-guide/](./style-guide/README.md)
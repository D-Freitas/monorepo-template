# Node.js Monorepo Template

A modern, production-ready monorepo template built with **pnpm workspaces**, **Turbo**, and **ES modules**. This template provides a solid foundation for building scalable JavaScript/TypeScript projects with shared configurations, optimized caching, and standardized tooling.

## 🏗️ Architecture

This monorepo is structured around two main directories:

- **`apps/`** - Application packages (deployable services, CLIs, etc.)
- **`packages/`** - Shared packages (utilities, configurations, libraries)

```text
monorepo-template/
├── apps/
│   └── example-app-1/           # Example application
│       ├── index.js             # Main application file
│       ├── jest.config.js        # Jest configuration
│       ├── babel.config.js       # Babel configuration for tests
│       ├── eslint.config.js      # Linting rules
│       └── tests/               # Test suites
├── packages/
│   ├── config/                  # Shared configurations
│   │   ├── babel/               # Babel presets
│   │   ├── esbuild/             # ESBuild configurations
│   │   ├── eslint/              # ESLint rules and settings
│   │   └── jest/                # Jest configurations
│   └── shared/                  # Shared utilities and modules
│       └── example-module-1/    # Example shared module
├── package.json                 # Root package configuration
├── pnpm-workspace.yaml         # pnpm workspace configuration
├── turbo.json                  # Turbo build system configuration
└── .gitignore                  # Git ignore rules
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** ≥ 20
- **pnpm** ≥ 9.6.0

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd monorepo-template

# Install dependencies
pnpm install
```

### Available Scripts

```bash
# Development
pnpm test                    # Run tests with intelligent caching
pnpm lint                    # Lint code with caching
pnpm fix                     # Auto-fix linting issues
pnpm build                   # Build all applications

# Force execution (ignore cache)
pnpm test:all                # Run all tests, ignore cache
pnpm lint:all                # Lint all files, ignore cache
pnpm build:all               # Build all apps, ignore cache

# Workspace-specific commands
pnpm test --filter=example-app-1     # Test specific workspace
pnpm build --filter=example-app-1    # Build specific workspace
```

## ⚡ Performance & Caching

This template leverages **Turbo's intelligent caching system** for maximum development speed:

### Cache Configuration

The `turbo.json` file defines caching strategies for different tasks:

```json
{
  "tasks": {
    "test": {
      "cache": true,
      "inputs": ["**/*.js", "**/*.json", "**/*.spec.js", "**/*.test.js"],
      "outputs": ["coverage/**"]
    },
    "lint": {
      "cache": true,
      "inputs": ["**/*.js", "**/*.json", "eslint.config.js"],
      "outputs": []
    }
  }
}
```

### Cache Behavior

- **Cache Hit**: Tasks are skipped if inputs haven't changed (⚡ **~13x faster**)
- **Cache Miss**: Tasks run normally and results are cached
- **Cache Invalidation**: Automatic when relevant files change

### Cache Management

```bash
# View cache status
pnpm test                    # Shows "cache hit" or "cache miss"

# Clear cache manually
rm -rf .turbo cache

# Force cache rebuild
pnpm test:all                # Uses --force flag
```

## 🧪 Testing

### Jest Configuration

Tests are configured with **ES modules support** and **workspace resolution**:

- **Babel transformation** for ES modules compatibility
- **Module mapping** for workspace imports
- **Shared configuration** via `@monorepo-template/config/jest`

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests for specific workspace
pnpm test --filter=example-app-1

# Run with coverage
pnpm test -- --coverage

# Watch mode
pnpm test -- --watch
```

### Test Example

```javascript
// apps/example-app-1/tests/example-app-1.spec.js
import { sum } from '../index.js'

describe('example-app-1', () => {
  it('should sum two numbers', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
```

## 📦 Package Management

### Workspace Dependencies

Use workspace protocol for internal dependencies:

```json
{
  "dependencies": {
    "@monorepo-template/config": "workspace:*",
    "@monorepo-template/shared": "workspace:*"
  }
}
```

### Shared Configurations

Access shared configurations via exports:

```javascript
// Import shared Jest config
import { nodeConfig } from '@monorepo-template/config/jest'

// Import shared ESLint config
import { defaultRules } from '@monorepo-template/config/eslint'

// Import shared utilities
import { exampleModule1 } from '@monorepo-template/shared/example-module-1'
```

## 🛠️ Development Tools

### ESLint

- **Shared rules** via `@monorepo-template/config/eslint`
- **Jest plugin** for test files
- **Automatic fixing** with `pnpm fix`

### Babel

- **ES modules** transformation for Jest
- **Node.js** target for optimal compatibility
- **Shared presets** for consistency

### ESBuild

- **Fast bundling** for production builds
- **Node.js** output format
- **Plugin system** for custom transformations

## 🔧 Configuration

### Adding New Workspaces

1. Create new directory in `apps/` or `packages/`
2. Add `package.json` with workspace dependencies
3. Update exports in shared packages if needed

Example:

```json
{
  "name": "new-app",
  "dependencies": {
    "@monorepo-template/config": "workspace:*"
  }
}
```

### Custom Configurations

Override shared configurations locally:

```javascript
// apps/my-app/jest.config.js
import { nodeConfig } from '@monorepo-template/config/jest'

export default {
  ...nodeConfig,
  testTimeout: 50_000  // Override default timeout
}
```

## 📁 Package Structure

### Apps Package

```text
apps/example-app-1/
├── index.js              # Main application entry
├── jest.config.js        # Test configuration
├── babel.config.js       # Babel for ES modules
├── esbuild.config.js     # Build configuration
├── eslint.config.js      # Linting rules
└── tests/                # Test files
    └── *.spec.js
```

### Shared Package

```text
packages/shared/
├── package.json          # Package configuration
└── example-module-1/     # Individual modules
    ├── index.js          # Module exports
    └── package.json      # Module metadata
```

### Config Package

```text
packages/config/
├── package.json          # Configuration dependencies
├── babel/                # Babel presets
├── esbuild/              # Build configurations
├── eslint/               # Linting rules
└── jest/                 # Test configurations
```

## 🚀 Production Deployment

### Building Applications

```bash
# Build all applications
pnpm build

# Build specific application
pnpm build --filter=example-app-1

# Build with clean cache
pnpm build:all
```

## 🔍 Troubleshooting

### Common Issues

**Module Resolution Errors**:

```bash
# Ensure workspaces are properly linked
pnpm install

# Check workspace configuration
cat pnpm-workspace.yaml
```

**Cache Issues**:

```bash
# Clear all caches
rm -rf .turbo cache node_modules && rm **/**/node_modules
pnpm install
```

**Jest ES Module Errors**:

- Ensure `babel.config.js` exists in workspace
- Check `moduleNameMapper` in Jest config
- Verify `"type": "module"` in `package.json`

### Performance Tips

1. **Use workspace filters** for faster builds: `--filter=workspace-name`
2. **Leverage cache** - avoid `:all` commands during development
3. **Parallel execution** - Turbo runs tasks in parallel when possible
4. **Incremental testing** - Only test changed workspaces

## 📝 License

This template is provided as-is for development purposes.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

---

Built by Davi Freitas 👊🏻

module.exports = {
  branches: ['master'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        releaseRules: [
          { breaking: true, release: 'major' },
          { revert: true, release: 'patch' },
          { type: 'feat', release: 'minor' },
          { type: 'fix', release: 'patch' },
          { type: 'perf', release: 'patch' }
        ]
      }
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        presetConfig: {
          types: [
            { type: 'build', section: 'Build system / dependencies' },
            { type: 'ci', section: 'CI' },
            { type: 'feat', section: 'Features' },
            { type: 'fix', section: 'Bug fixes' },
            { type: 'perf', section: 'Performance' },
            { type: 'refactor', section: 'Refactoring' },
            { type: 'test', section: 'Testing' }
          ]
        }
      }
    ],
    '@semantic-release/changelog',
    '@semantic-release/github',
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package-lock.json', 'package.json']
      }
    ]
  ]
};

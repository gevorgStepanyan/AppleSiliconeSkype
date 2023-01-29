module.exports = {
  packagerConfig: {
    arch: 'arm64',
    platforms: ['darwin'],
    icon: 'src/assets/skype_icon.icns',
    category: 'public.app-category.social-networking',
    protocol: 'skype',
    protocolName: 'Skype',
    osxSign: {}
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
    {
      name: '@electron-forge/maker-dmg',
      platforms: ['darwin'],
      config: {
        name: 'SkypeElectron',
        overwrite: true,
        logo: 'src/assets/skype_icon.png',
        format: 'ULFO',
        debug: true
      }
    },
  ],
};

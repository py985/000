module.exports = {
    packagerConfig: { icon: 'icon', name: '000' },
    rebuildConfig: {},
    makers: [
        { name: '@electron-forge/maker-squirrel', config: { name: '000', setupIcon: 'icon.ico' } },
        { name: '@electron-forge/maker-zip', platforms: ['darwin'] },
        { name: '@electron-forge/maker-deb', config: { icon: 'icon.png' } },
        { name: '@electron-forge/maker-rpm', config: { icon: 'icon.png' } }
    ]
};
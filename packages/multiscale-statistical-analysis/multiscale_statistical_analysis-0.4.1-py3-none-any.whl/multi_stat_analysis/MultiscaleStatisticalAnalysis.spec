# -*- mode: python ; coding: utf-8 -*-

block_cipher = None

resource_files = [
    ('C:\\workspace\\Multiscale-Statistical-Analysis\\resources\\*', '.')
]

a = Analysis(['__main__.py'],
             pathex=['C:\\workspace\\Multiscale-Statistical-Analysis\\src\\multi_stat_analysis'],
             binaries=[],
             datas=resource_files,
             hiddenimports=['scipy.special.cython_special','pyimod03_importers','pkg_resources.py2_warn'],
             hookspath=[],
             runtime_hooks=[],
             excludes=[],
             win_no_prefer_redirects=False,
             win_private_assemblies=False,
             cipher=block_cipher,
             noarchive=False)
pyz = PYZ(a.pure, a.zipped_data,
             cipher=block_cipher)
exe = EXE(pyz,
          a.scripts,
          a.binaries,
          a.zipfiles,
          a.datas,
          [],
          name='MultiscaleStatisticalAnalysis',
          debug=False,
          bootloader_ignore_signals=False,
          strip=False,
          upx=True,
          upx_exclude=[],
          runtime_tmpdir=None,
          console=False )

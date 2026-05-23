const fs = require('fs')
const path = require('path')

// 1. Copy Logo
const logoSrc = 'C:\\Users\\Abhiram P M\\.gemini\\antigravity\\brain\\ea7218fe-746d-41c3-94c4-d5659a8f3d46\\media__1779556129383.png'
const logoDest = path.join(__dirname, 'src', 'assets', 'logo.png')
try {
  fs.copyFileSync(logoSrc, logoDest)
  console.log('Logo copied successfully')
} catch (e) {
  console.error('Error copying logo:', e.message)
}

// 2. CSS Color Replacements
const rules = [
  // Red -> Gold
  [/DA0643/gi, 'D4AF37'],
  [/218,\s*6,\s*67/g, '212,175,55'],
  // Dark Wine -> Dark Teal
  [/1D0C1A/gi, '082B36'],
  [/29,\s*12,\s*26/g, '8,43,54'],
  // Off whites
  [/f5f0eb/gi, 'F7F4EC'],
  // Pink / Light pink -> Lighter golds
  [/ff6b9d/gi, 'F0D682'],
  [/ff9bbd/gi, 'F8EBB1'],
  [/255,\s*107,\s*157/g, '240,214,130'], // Pulse dot
  // Hover reds -> Hover golds
  [/ed0c4a/gi, 'c5a130'],
  [/b00536/gi, 'b39129'],
  // Canvas / Footer dark themes -> Deep Teal variations
  [/1a1510/gi, '051a21'],
  [/110710/gi, '031318'],
  // RGBA dark wine variations
  [/18,\s*8,\s*16/g, '5,26,33'],
  [/20,\s*9,\s*18/g, '6,33,42'],
  [/10,\s*4,\s*9/g, '3,17,21'],
  [/16,\s*7,\s*14/g, '5,23,29']
]

function walkSync(dir) {
  const files = fs.readdirSync(dir)
  for (const file of files) {
    const filePath = path.join(dir, file)
    if (fs.statSync(filePath).isDirectory()) {
      walkSync(filePath)
    } else if (filePath.endsWith('.css') || filePath.endsWith('.jsx')) {
      let content = fs.readFileSync(filePath, 'utf8')
      let original = content
      for (const [regex, replacement] of rules) {
        content = content.replace(regex, replacement)
      }
      if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8')
        console.log(`Updated colors in ${filePath}`)
      }
    }
  }
}

try {
  walkSync(path.join(__dirname, 'src'))
  console.log('Color replacement complete.')
} catch (e) {
  console.error('Error walking files:', e.message)
}

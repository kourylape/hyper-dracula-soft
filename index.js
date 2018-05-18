'use strict'

const backgroundColor = '#282a36'
const foregroundColor = '#f6f6f4'

const black = '#4f4f4f'
const red = '#c54843'
const green = '#48bd60'
const yellow = '#bec276'
const blue = '#9d82bc'
const magenta = '#ca699b'
const cyan = '#7db7c0'
const white = '#cfcfcf'

const brightBlack = '#747474'
const brightRed = '#ee6666'
const brightGreen = '#62e884'
const brightYellow = '#e7ee98'
const brightBlue = '#bf9eee'
const brightMagenta = '#f286c4'
const brightCyan = '#97e1f1'
const brightWhite = '#f6f6f4'
const tabActive = '#44475a'

exports.decorateConfig = config => {
	return Object.assign({}, config, {
	  backgroundColor,
	  foregroundColor,
	  borderColor: black,
	  cursorColor: brightBlack,
	  colors: [
		black,
		red,
		green,
		yellow,
		blue,
		magenta,
		cyan,
		white,
		brightBlack,
		brightRed,
		brightGreen,
		brightYellow,
		brightBlue,
		brightMagenta,
		brightCyan,
		brightWhite
	  ],
	  css: `
			  ${config.css || ''}
			  .tabs_list .tab_tab.tab_active .tab_text  {
				  background: ${backgroundColor};
			  }

			  .tab_active:before {
				  border-color: ${tabActive};
			  }
		  `
	})
  }




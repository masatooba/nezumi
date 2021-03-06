import _ from 'lodash';

export const formatTextValue = (value = '') => {
  const allLine = value.split(/\r\n|\r|\n/);

  if (allLine.length === 1) {
    return `'${allLine[0]}'`;
  }

  return `"${_.join(allLine, '\\n')}"`;
};

export const escapeForRuby = (text = '') => {
  return text.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/'/g, "\\'");
};

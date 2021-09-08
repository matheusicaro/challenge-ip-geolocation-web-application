const isNullOrEmpty = (string: string | undefined): boolean => string === undefined || string === '' || string.length === 0;

const StringUtils = {
  isNullOrEmpty,
};

export default StringUtils;

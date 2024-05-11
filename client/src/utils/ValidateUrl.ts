const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

// Function to validate URL inputs
export const validateUrlInput = (url: string) => {
  return urlRegex.test(url);
};

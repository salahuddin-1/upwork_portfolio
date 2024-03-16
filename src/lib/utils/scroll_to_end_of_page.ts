const scrollToEndOfPage = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
};

export default scrollToEndOfPage;

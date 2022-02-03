import Showdown from "showdown";

const NoteToMarkdown = (content: string) => {
  const markdownConverter = new Showdown.Converter();

  return markdownConverter.makeHtml(content);
};

export default NoteToMarkdown;

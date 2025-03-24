/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

type StyledChar = {
  char: string;
  styles: string[];
};

type Block = {
  key: string;
  text: string;
  type: string;
  inlineStyleRanges: { offset: number; length: number; style: string }[];
};

const applyInlineStyles = (text: string, inlineStyles: any[]) => {
  const styledChars: StyledChar[] = text.split("").map((char) => ({ char, styles: [] }));

  inlineStyles.forEach(({ offset, length, style }) => {
    for (let i = offset; i < offset + length; i++) {
      if (styledChars[i]) {
        styledChars[i].styles.push(style);
      }
    }
  });

  let styledText = "";

  styledChars.forEach(({ char, styles }, index) => {
    const prevStyles = index > 0 ? styledChars[index - 1].styles : [];
    prevStyles.forEach((style) => {
      if (!styles.includes(style)) {
        styledText += `</${getTagForStyle(style)}>`;
      }
    });

    styles.forEach((style) => {
      if (!prevStyles.includes(style)) {
        styledText += `<${getTagForStyle(style)}>`;
      }
    });

    styledText += char;
  });

  return styledText;
};

const getTagForStyle = (style: string) => {
  switch (style) {
    case "BOLD":
      return 'strong class="text-lg"';
    case "ITALIC":
      return 'em class="text-lg"';
    case "UNDERLINE":
      return 'u class="text-lg"';
    case "LINK":
      return `a href="#" class="text-xl cursor-pointer hover:underline" target="_blank" rel="noopener noreferrer"`;
    default:
      return "span";
  }
};

interface RenderBlockProps {
  block: Block;
  alignment?: string;
}

const RenderBlock: React.FC<RenderBlockProps> = ({ block, alignment = "start" }) => {
  const styledText = applyInlineStyles(block.text, block.inlineStyleRanges);

  switch (block.type) {
    case "header-one":
      return <h1 key={block.key} className={`text-3xl font-bold my-2 flex justify-${alignment}`} dangerouslySetInnerHTML={{ __html: styledText }} />;
    case "header-two":
      return <h2 key={block.key} className={`text-2xl font-bold my-2 flex justify-${alignment}`} dangerouslySetInnerHTML={{ __html: styledText }} />;
    case "header-three":
      return <h3 key={block.key} className={`text-xl font-bold my-2 flex justify-${alignment}`} dangerouslySetInnerHTML={{ __html: styledText }} />;
    case "unordered-list-item":
      return <li key={block.key} className="list-disc ml-5 text-lg">{styledText}</li>;
    case "ordered-list-item":
      return <li key={block.key} className="list-decimal ml-5 text-lg">{styledText}</li>;
    case "code-block":
      return (
        <div className="max-w-full flex p-5 justify-center items-center text-lg">
          <pre key={block.key} className="bg-gray-900 text-white p-6 rounded-md my-2 w-full">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
            </div>
            <code className="text-sm sm:text-base break-words whitespace-pre-wrap">{styledText}</code>
          </pre>
        </div>
      );
    default:
      return <p key={block.key} className="my-1 text-xl flex" dangerouslySetInnerHTML={{ __html: styledText }} />;
  }
};

export default RenderBlock;
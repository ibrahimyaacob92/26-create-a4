export type ResumeLine = {
  type:
    | "text"
    | "richText"
    | "horizontalLine"
    | "header"
    | "subheader"
    | "space"
    | "subtitle";
  contents: { content: string | number; href?: string; iconId?: string }[]; // think how to add icon
  isApart?: boolean;
  isCenter?: boolean;
  marginBottom?: number;
};

const richContent: ResumeLine[] = [
  {
    type: "header",
    contents: [{ content: `Muhammad Ibrahim bin Yaacob` }],
  },
  {
    type: "subtitle",
    contents: [{ content: `Ad elit reprehenderit amet ad.` }],
  },
  {
    type: "horizontalLine",
    contents: [{ content: 1 }],
  },
  {
    type: "text",
    isApart: true,
    contents: [
      { content: `ibrahimyaacob@yahoo.com`, href: "https://google.com" },
      { content: "dfefwefpow ekfpwe jf" },
    ],
  },
  {
    type: "text",
    contents: [
      {
        content: `Ad elit reprehenderit amet ad. Magna aliqua ea minim mollit eiusmod ullamco pariatur magna consectetur sint ullamco commodo.`,
      },
    ],
  },
  {
    type: "subheader",
    contents: [
      {
        content: `This is a subheader`,
      },
    ],
  },
  {
    type: "richText",
    contents: [
      {
        content:
          "<p>Collaborate with clients to understand their web development needs and project requirements. </p><ul className='list-disc'><li><p>Develop and maintain responsive and visually appealing websites and web applications. Customize existing websites, implement new features, and ensure the optimal functionality of web projects.</p></li><li><p>Something here lorem</p></li><li><p>ANother hting here lorem</p></li></ul>",
      },
    ],
    marginBottom: 12,
  },

  {
    type: "subheader",
    contents: [
      {
        content: `This is a subheader`,
      },
    ],
  },
  {
    type: "richText",
    contents: [
      {
        content:
          "<p>Collaborate with clients to understand their web development needs and project requirements. </p><ul className='list-disc'><li><p>Develop and maintain responsive and visually appealing websites and web applications. Customize existing websites, implement new features, and ensure the optimal functionality of web projects.</p></li><li><p>Something here lorem</p></li><li><p>ANother hting here lorem</p></li></ul>",
      },
    ],
    marginBottom: 12,
  },
  {
    type: "subheader",
    contents: [
      {
        content: `This is a subheader`,
      },
    ],
  },
  {
    type: "richText",
    contents: [
      {
        content:
          "<p>Collaborate with clients to understand their web development needs and project requirements. </p><ul className='list-disc'><li><p>Develop and maintain responsive and visually appealing websites and web applications. Customize existing websites, implement new features, and ensure the optimal functionality of web projects.</p></li><li><p>Something here lorem</p></li><li><p>ANother hting here lorem</p></li></ul>",
      },
    ],
    marginBottom: 12,
  },
  {
    type: "subheader",
    contents: [
      {
        content: `This is a subheader`,
      },
    ],
  },
  {
    type: "richText",
    contents: [
      {
        content:
          "<p>Collaborate with clients to understand their web development needs and project requirements. </p><ul className='list-disc'><li><p>Develop and maintain responsive and visually appealing websites and web applications. Customize existing websites, implement new features, and ensure the optimal functionality of web projects.</p></li><li><p>Something here lorem</p></li><li><p>ANother hting here lorem</p></li></ul>",
      },
    ],
    marginBottom: 12,
  },
  {
    type: "subheader",
    contents: [
      {
        content: `This is a subheader`,
      },
    ],
  },
  {
    type: "richText",
    contents: [
      {
        content:
          "<p>Collaborate with clients to understand their web development needs and project requirements. </p><ul className='list-disc'><li><p>Develop and maintain responsive and visually appealing websites and web applications. Customize existing websites, implement new features, and ensure the optimal functionality of web projects.</p></li><li><p>Something here lorem</p></li><li><p>ANother hting here lorem</p></li></ul>",
      },
    ],
    marginBottom: 12,
  },
  {
    type: "subheader",
    contents: [
      {
        content: `This is a subheader`,
      },
    ],
  },
  {
    type: "richText",
    contents: [
      {
        content:
          "<p>Collaborate with clients to understand their web development needs and project requirements. </p><ul className='list-disc'><li><p>Develop and maintain responsive and visually appealing websites and web applications. Customize existing websites, implement new features, and ensure the optimal functionality of web projects.</p></li><li><p>Something here lorem</p></li><li><p>ANother hting here lorem</p></li></ul>",
      },
    ],
    marginBottom: 12,
  },
];

export default richContent;

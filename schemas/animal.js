export default {
  name: "animal",
  type: "document",
  title: "Animal",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      title: "Description",
      name: "description",
      type: "text",
    },
    {
      title: "Poster",
      name: "poster",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
  ],
};

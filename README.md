# Loops Document Reader

## How to Run

1. Run `npm install` to install dependencies.
2. Use `npm run dev` to start the application server.
3. The application will be available at [http://localhost:3000](http://localhost:3000).

## Document JSON

The document JSON file, named `document.json`, is located in the `public` folder. This file contains the structure of the document, organized into blocks. Each block consists of the following properties:

- `type`: The type of the block, such as text, image, quote, etc.
- `content`: The content of the block, which varies depending on the type.
- `order`: The order of the block within the document.
- `width`: The width of the block, ranging from 1 to 12, to control its position in the layout.

### Example JSON Structure

```json
{
  "blocks": [
    {
      "type": "html",
      "content": "<div><h3>Lorem Ipsum</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>",
      "width": 12,
      "order": 1
    },
    {
      "type": "text",
      "content": {
        "title": "Lorem Ipsum",
        "content": "Lorem ipsum dolor sit amet"
      },
      "width": 12,
      "order": 2
    },
    {
      "type": "container",
      "width": 12,
      "order": 3
      "content": [
        {
          "type": "quote",
          "content": "Lorem Ipsum dolor sit amet",
          "width": 6,
          "order": 1
        },
        {
          "type": "quote",
          "content": "Lorem Ipsum dolor sit amet",
          "width": 6,
          "order": 2
        }
      ],
    },

    // Other block objects...
  ]
}
```

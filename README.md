This is a project illustrating use of a custom table component.
It is using

- nextjs
- react frameworks
- scss for styling
- testing-library/react
- use-debounce library

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Alternatively for optimized build run

```bash
npm run build
```

```bash
 npm run start
```

## Deployed app

The app is deployed on vercel [https://next-table-task.vercel.app/](https://next-table-task.vercel.app)

Github repository at [https://github.com/mkruneva/next-table-task](https://github.com/mkruneva/next-table-task)

---

## Table Component Documentation

### Overview

The `Table` component provides a flexible and customizable table layout for displaying data sets in React applications. It supports custom cell rendering, loading states, and error handling. The component is ideal for displaying any tabular data, particularly when each cell or row might require specific formatting or behavior.

### API Reference

#### Props

- **data (`T[]`)**: Array of data items to be displayed. Each item must extend from `BaseTableItem`.
- **columns (`TableColumn<T, K>[]`)**: Configuration for table columns. Each column can define a custom renderer.
- **isLoading (`boolean`)** _(optional)_: Shows a loading indicator if true. Default is `false`.
- **isErrored (`boolean`)** _(optional)_: Displays an error message if true. Default is `false`.

#### Interfaces

##### `TableProps<T, K extends keyof T>`

Describes the props accepted by the `Table` component, including data, columns, and optional flags for loading and error states.

##### `RenderedCell<T>`

Provides the data and row index for a cell, facilitating custom rendering logic based on the row index.

##### `TableColumn<T, K extends keyof T>`

Defines a single column's configuration in the table, including label, accessor for data extraction, and an optional custom cell renderer.

#### Types

##### `BaseTableItem`

Defines a minimal structure for data items, requiring an `id` that can be either a number or a string.

### Usage Examples

#### Basic Example

Render a simple table without custom cell rendering:

```jsx
<Table
  data={userData}
  columns={[
    { label: 'ID', accessor: 'id' },
    { label: 'Name', accessor: 'name' },
    { label: 'Email', accessor: 'email' },
  ]}
/>
```

#### Advanced Example

Render a table with custom cell rendering that highlights the name in bold:

```jsx
<Table
  data={userData}
  columns={[
    { label: 'ID', accessor: 'id' },
    {
      label: 'Name',
      accessor: 'name',
      renderCellContent: ({ cellData }) => <strong>{cellData.name}</strong>,
    },
    { label: 'Email', accessor: 'email' },
  ]}
/>
```

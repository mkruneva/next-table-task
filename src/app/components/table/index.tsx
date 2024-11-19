import { ReactNode } from 'react'
import { SkeletonTable } from './skeleton-table'
import './table.scss'

export interface RenderedCell<T> {
  /** Row data for a cell with a custom renderer */
  cellData: T;
}

export interface TableColumn<T, K extends keyof T> {
  /** Displayed column name */
  label: string;
  /** The key for a table data list item */
  accessor: K;
  /** Custom render for each column cell */
  renderCellContent?: (props: RenderedCell<T>) => ReactNode;
}

/**
 * Configurable Table interface
 *
 * @template T TableData, Generic table data interface
 * @template K List of keys from the `T` interface
 */ interface TableProps<T, K extends keyof T> {
  /** Table data to display */
  data: T[];
  /** List of columns to display */
  columns: TableColumn<T, K>[];
  /**
   * Is table data loading, boolean
   */
  isLoading?: boolean;
  /**
   * Are there errors in the request, boolean
   */
  isErrored?: boolean;
}

/** The base interface for table data */
export interface BaseTableItem {
  /** A unique id for a table row */
  id: number | string;
}

/**
 * Configurable table component
 */
export const Table = <T extends BaseTableItem, K extends keyof T>({
  data,
  columns,
  isLoading,
  isErrored,
}: TableProps<T, K>) => {
  if (isLoading) return <SkeletonTable rows={10} columns={4} />

  // TODO: better styling for error states
  if (isErrored) return <div>Something went wrong</div>

  if (!isLoading && !isErrored && !data?.length)
    return <div>No users found</div>

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead className="table__header">
          <tr className="table__header-row">
            {columns.map(({ accessor, label }) => (
              <th key={accessor as string} className="table__header-cell">
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="table__body">
          {data.map((row, index) => (
            <tr key={row.id} className="table__row" aria-rowindex={index}>
              {columns.map(({ accessor, renderCellContent }) => (
                <td
                  key={String(accessor)}
                  className={`table__cell ${accessor as string}`}
                >
                  {renderCellContent ? (
                    renderCellContent({ cellData: row })
                  ) : (
                    <span>{row[accessor] as string} </span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// TODO: TASKS:
// pagination or react-visibility-sensor (Intersection Observe)
// image optimisation ?
// Search with deboounce

// ?
// using style import from scss vs current implementation
//

// Done
// // type for the table

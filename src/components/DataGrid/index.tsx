import React from 'react';
import { block } from 'utils/classname';

import './style.scss';

const b = block('data-grid');

export type DataGridColumn = {
  label: React.ReactNode;
  colSpan?: number;
  sortable?: boolean;
  helpText?: string;
  minWidth?: string;
  align?: 'start' | 'center' | 'end';
  disablePadding?:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'horizontal'
    | 'vertical';
}[];

type Props = {
  columns: DataGridColumn[];
  hasHead?: boolean;
  data: (string | JSX.Element)[][];
};

export const DataGrid = (props: Props) => {
  const { columns, data, hasHead = true } = props;
  return (
    <div className = "table-wrapper">
      <table className={b()} cellPadding="0" cellSpacing="2">
        {hasHead && (
          <thead className={b('head')}>
            {columns.map((row, i) => (
              <tr key={i}>
                {row.map((heading, j) => (
                  <th
                    key={j}
                    className={b('heading', {
                      align: heading.align,
                      'disable-padding': columns?.[0]?.[j]?.disablePadding,
                    })}
                    colSpan={heading.colSpan}
                    style={{ minWidth: heading.minWidth }}
                  >
                    <span>{heading.label}</span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
        )}
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className={b('row')}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={b('cell')}
                  style={{ minWidth: columns?.[0]?.[j]?.minWidth }}
                >
                  <div
                    className={b('cell-inner', {
                      align: columns?.[0]?.[j]?.align,
                      'disable-padding': columns?.[0]?.[j]?.disablePadding,
                    })}
                  >
                    {cell}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


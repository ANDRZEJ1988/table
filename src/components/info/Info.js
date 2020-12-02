import {useTable} from 'react-table';
import './Info.css';
import {useDispatch, useSelector} from "react-redux";
import {dataSelector} from "../../store/selectors";
import {searchAction} from "../../actions/actions";
import {initiaState} from "../../store/store";

export const Info = () => {
    const data = useSelector(dataSelector);
    const dispatch = useDispatch();
    const columns = [
        {
            Header: 'Code',
            accessor: 'code',
        }, {
            Header: 'Description',
            accessor: 'description',
        }, {
            Header: 'Length',
            accessor: 'length',
        }, {
            Header: 'Width',
            accessor: 'width',
        }, {
            Header: 'Height',
            accessor: 'height',
        }, {
            Header: 'Weight',
            accessor: 'weight',
        },
    ];
    const Table = ({columns, data}) => {
        const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow,
        } = useTable({
            columns,
            data,
        })
        return (
            <table {...getTableProps()}>
                <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
                </tbody>
            </table>
        )
    };
    const search = (event) => {
        const name = event.target.value;
        const copy = data.slice();
        if (name.length === 0) {
            dispatch(searchAction(initiaState.data))
        } else {
            const result = copy.filter(value =>
                value.description.toLowerCase().includes(name)
                || String(value.length).includes(name) || String(value.width).includes(name) ||
                String(value.height).includes(name) || String(value.weight).includes(name) ||
                value.code.toLowerCase().includes(name)
            );
            dispatch(searchAction(result));
        }

    };
    return (
        <div>
            <input className='inp' type="text" placeholder='ENTER SEARCH TEXT' onInput={search}/>
            <Table columns={columns} data={data}/>
        </div>

    );
}

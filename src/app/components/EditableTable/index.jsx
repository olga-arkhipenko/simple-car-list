import React from 'react';
import Table  from '../Table';
import PageLink  from '../PageLink';
import routes from '../../constants/routes';
import './index.css';

const EditableTable = ({ data, tableHeadings, onClickDelete, onClickEdit }) => {
    return (
        <div className="table-wrapper">
            <Table
                data={ data }
                headings={ tableHeadings }
                onClickDelete={ onClickDelete }
                onClickEdit={ onClickEdit }/>
            <PageLink
                path={ routes.ADD_FORM }
                type='adding-link'>
                Add a car
            </PageLink>
        </div>
    );
};

export default EditableTable;
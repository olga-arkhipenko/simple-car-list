import React from 'react';
import Table from '../Table';
import TableHeading from '../TableHeading';
import CarsTableRow from '../CarsTableRow';
import PageLink from '../PageLink';
import routes from '../../constants/routes';
import tableHeadings from '../../constants/tableHeadings';
import './index.css';

const CarsTable = ({ cars, onDelete }) => {
    const carsTableBody = cars.map(car => (
        <CarsTableRow
            key={ car.id }
            car={ car }
            onDelete={ onDelete }
        />
    ));

    const carsTableHeading = <TableHeading headings={ tableHeadings } />;

    return (
        <div className="table-wrapper">
            <Table tableHeading={ carsTableHeading } tableBody={ carsTableBody } />
            <PageLink
                path={ routes.ADD_FORM }
                type="adding-link"
            >
                Add a car
            </PageLink>
        </div>
    );
};

export default CarsTable;

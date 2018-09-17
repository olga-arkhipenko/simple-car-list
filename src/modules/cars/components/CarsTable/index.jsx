import React from 'react';
import PropTypes from 'prop-types';

import Table from 'common/components/Table';
import TableHeading from 'common/components/TableHeading';
import PageLink from 'common/components/PageLink';
import CarsTableRow from 'carsModule/components/CarsTableRow';

import Car from 'carsModule/models/car';
import routes from 'common/constants/routes';
import tableHeadings from 'carsModule/constants/tableHeadings';

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

CarsTable.propTypes = {
    cars: PropTypes.arrayOf(PropTypes.instanceOf(Car)).isRequired,
    onDelete: PropTypes.func.isRequired
};

export default CarsTable;

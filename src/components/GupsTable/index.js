import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { fetchGruops } from '../../action/gruopsAction';
import * as GruopsAction from '../../types/gruopsActionTypes';
import { columns } from '../../utils'
import { Button, Table } from 'antd';
import { CloseOutlined,EditOutlined } from '@ant-design/icons';

function GupsTable(props) {
  const [gruops, setGruops] = React.useState([]);

  function addDeleteButton (list){
    return list.map((listElement) => {
      const newList = listElement;
      newList.delete = (
        <Button
          shape='circle'
          icon={<EditOutlined />}
          onClick={() => {
            this.handleClickDelete(listElement);
          }}
        />
      );
      return newList;
    });
  };

  function addUpdateButton (list){
    return list.map((listElement) => {
      const newList = listElement;
      newList.edit = (
        <Button
          shape='circle'
          icon={<CloseOutlined />}
          onClick={() => {
            this.handleClickDelete(listElement);
          }}
        />
      );
      return newList;
    });
  };
  
  useEffect(() => {
    if (
      props.gruopsFetchCount === 0 &&
      props.gruopsFetchState !== GruopsAction.GruopsFetchStates.FETCHING
    ) {
      props.dispatchFetchGruops();
    } else if (
      props.gruopsFetchState === GruopsAction.GruopsFetchStates.FETCHED
    ) {
      setGruops(props.gruops);
      addDeleteButton(props.gruops);
      addUpdateButton(props.gruops);
    }
  }, [props]);

 

  return (
    <div style={{}}>
      <Table columns={columns} dataSource={gruops} pagination={false} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  gruops: state.gruops.gruops,
  gruopsFetchCount: state.gruops.gruopsFetchCount,
  gruopsFetchState: state.gruops.gruopsFetchState,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchFetchGruops: () => dispatch(fetchGruops()),
});

GupsTable.propTypes = {
  gruopsFetchState: PropTypes.string.isRequired,
  gruopsFetchCount: PropTypes.number.isRequired,
  gruops: PropTypes.array.isRequired,
  dispatchFetchgruops: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(GupsTable);

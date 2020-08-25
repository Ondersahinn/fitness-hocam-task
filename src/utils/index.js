
export const groups = () => {
  return [
    {
      _id: '1',
      groupManager: 'Cihan NAM',
      groupName: 'Fitness Hocam & Yönetim'
    },
    {
      _id: '2',
      groupManager: 'Cihan NAM',
      groupName: 'Fitness Hocam & Yönetim'
    },
    {
      _id: '3',
      groupManager: 'Cihan NAM',
      groupName: 'Fitness Hocam & Yönetim'
    },
  ];
};

export const columns = [
  {
    title: 'No',
    dataIndex: '_id',
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
    },
  },
  {
    title: 'Grup Yöneticisi',
    dataIndex: 'groupManager',
  },
  {
    title: 'Grup Adı',
    dataIndex: 'groupName',
  },
  {
    title: '',
    dataIndex: 'delete',
  },
  {
    title: '',
    dataIndex: 'edit',
  },
];
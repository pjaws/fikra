export default {
  find() {
    return [
      { id: '1', channelId: '1', title: 'Fikra Design System' },
      { id: '2', channelId: '2', title: 'API Documentation' },
      { id: '3', channelId: '3', title: 'Tips for New Hires' },
      { id: '4', channelId: '1', title: 'Great Design Resources' },
      { id: '5', channelId: '2', title: 'Front-end Architecture' },
      { id: '6', channelId: '6', title: 'Upcoming Events' },
    ];
  },
  getByChannelId(id) {
    return this.find().filter((c) => c.channelId === id);
  },
};

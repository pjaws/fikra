import shortid from 'shortid';

export default {
  threads: [
    {
      id: '1',
      channelId: '1',
      title: 'Fikra Design System',
      body: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
    },
    {
      id: '2',
      channelId: '2',
      title: 'API Documentation',
      body: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
    },
    { id: '3', channelId: '3', title: 'Tips for New Hires' },
    { id: '4', channelId: '1', title: 'Great Design Resources' },
    { id: '5', channelId: '2', title: 'Front-end Architecture' },
    { id: '6', channelId: '6', title: 'Upcoming Events' },
  ],
  find() {
    return this.threads;
  },
  getByChannelId(id) {
    return this.threads.filter((c) => c.channelId === id);
  },
  get(id) {
    const [thread] = this.threads.filter((c) => c.id === id);

    return thread;
  },
  create(data) {
    const id = shortid.generate();
    this.threads.push({ id, ...data });
    return { id, ...data };
  },
};

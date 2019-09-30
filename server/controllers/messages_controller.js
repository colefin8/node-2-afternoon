let messages = [];
let id = 0;

module.exports = {
  create: (req, res) => {
    const { text, time } = req.body;
    let newMessage = {
      id: id,
      text: text,
      time: time
    };
    messages.push(newMessage);
    id++;
    console.log(messages);
    res.status(200).send(messages);
  },
  read: (req, res) => {
    console.log(messages);
    res.status(200).send(messages);
  },
  update: (req, res) => {
    const { id } = req.params;
    // console.log(id);
    // console.log(req.body);
    const newText = req.body.text;
    // console.log(newText);

    messages.forEach((e, i) => {
      if (i === parseInt(id)) {
        messages[i] = {
          id: parseInt(id),
          text: newText,
          time: e.time
        };
      }
      console.log(messages);

      res.status(200).send(messages);
    });
  },
  delete: (req, res) => {
    const { id } = req.params;
    if (messages[parseInt(id)]) messages.splice(parseInt(id), 1);
    console.log(messages);

    res.status(200).send(messages);
  }
};

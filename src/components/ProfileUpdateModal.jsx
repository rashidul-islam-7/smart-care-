import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

const ProfileUpdateModal = ({ userInfo }) => {
  const user = userInfo?.user;

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
  };

  return (
    <Modal>
      <Button
        className="cursor-pointer py-1 px-3 rounded-xl bg-white 
          border border-gray-300 hover:border-blue-400 hover:text-blue-600 duration-300 transition-all text-gray-500"
      >
        {" "}
        Edit Profile
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Update Profile</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form
                  onSubmit={handleUpdateProfile}
                  className="flex flex-col gap-4"
                >
                  <TextField
                    className="w-full"
                    name="name"
                    type="text"
                    variant="secondary"
                  >
                    <Label>Name</Label>
                    <Input defaultValue={user?.name} />
                  </TextField>

                  <TextField className="w-full" name="url" variant="secondary">
                    <Label>Image URL</Label>
                    <Input defaultValue={user?.imag} />
                  </TextField>

                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button slot="close">Save Change</Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default ProfileUpdateModal;

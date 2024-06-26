import InboxScreen from "./InboxScreen";
import store from "../lib/store";
import { http } from "msw";
import { MockedState } from "./TaskList.stories";
import { Provider } from "react-redux";
import {
  fireEvent,
  waitFor,
  within,
  waitForElementToBeRemoved,
} from "@storybook/test";

export default {
  component: InboxScreen,
  title: "InboxScreen",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {
  parameters: {
    msw: {
      handlers: [
        http.get("https://jsonplaceholder.typicode.com/todos?userId=1", () => {
          return new Response(JSON.stringify(MockedState.tasks), {
            headers: {
              "Content-Type": "application/json",
            },
          });
        }),
      ],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Waits for the component to transition from the loading state
    await waitForElementToBeRemoved(await canvas.findByTestId("loading"));
    // Waits for the component to be updated based on the store
    await waitFor(async () => {
      // Simulates pinning the first task
      await fireEvent.click(canvas.getByLabelText("pinTask-1"));
      // Simulates pinning the third task
      await fireEvent.click(canvas.getByLabelText("pinTask-3"));
    });
  },
};

export const Error = {
  parameters: {
    msw: {
      handlers: [
        http.get(
          "https://jsonplaceholder.typicode.com/todos?userId=1",
          () => {
            return new Response(null, {
              status: 403,
              headers: {
                "Content-Type": "application/json",
              },
            });
          }
        ),
      ],
    },
  },
};

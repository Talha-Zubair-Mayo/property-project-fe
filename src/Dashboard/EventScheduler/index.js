import { Scheduler } from "@aldabil/react-scheduler";
import { EVENTS } from "./events";
import { addNewEventApi, getAllEventsApi, editEventApi, deleteEventApi } from "../../store/api"
import moment from "moment"
import Hooks from "../../hooks";
export default function EventScheduler() {
    const { UserDetails } = Hooks();
    const fetchRemote = async (query) => {
        console.log("Query: ", query);
        const response = await getAllEventsApi(UserDetails().id)
        return response?.data?.result?.map((item) => {
            return ({
                event_id: item?._id,
                title: item?.title,
                description: item?.description,
                start: item?.start ? new Date(item?.start) : "",
                end: item?.end ? new Date(item?.end) : ""
            })
        }
        );

    };

    const handleConfirm = async (event, action) => {
        console.log(event, action);
        if (action === "edit") {
            const response = await editEventApi(event?.event_id, {
                title: event?.title,
                description: event?.description,
                start: moment(event?.start).format("YYYY MM DD HH:MM"),
                end: moment(event?.end).format("YYYY MM DD HH:MM")
            })
            return {
                event_id: response?.data?.result?._id,
                title: response?.data?.result?.title,
                description: response?.data?.result?.description,
                start: new Date(response?.data?.result?.start),
                end: new Date(response?.data?.result?.end)
            }
        } else if (action === "create") {
            /**POST event to remote DB */
            const response = await addNewEventApi({
                title: event?.title,
                description: event?.description,
                start: moment(event?.start).format("YYYY MM DD HH:MM"),
                end: moment(event?.end).format("YYYY MM DD HH:MM")
            })
            return {
                event_id: response?.data?.result?._id,
                title: response?.data?.result?.title,
                description: response?.data?.result?.description,
                start: new Date(response?.data?.result?.start),
                end: new Date(response?.data?.result?.end)
            }
        }

    };

    const handleDelete = async (deletedId) => {
        const response = await deleteEventApi(deletedId)
        return deletedId;
    };
    return (
        <div className="col-lg-9 col-md-12 col-xs-12 pl-0 pr-3 user-dash">
            <Scheduler
                remoteEvents={fetchRemote}
                onConfirm={handleConfirm}
                onDelete={handleDelete}
                selectedDate={new Date()}
                fields={[
                    {
                        name: "description",
                        type: "input",
                        config: { label: "Description", required: true, min: 3, row: 4, variant: "outlined" }
                    }
                ]}
                day={{
                    startHour: 0,
                    endHour: 24,
                    step: 60,
                }}
                week={{
                    weekDays: [0, 1, 2, 3, 4, 5],
                    weekStartOn: 6,
                    startHour: 0,
                    endHour: 24,
                    step: 60,
                }}
            />
        </div>

    );
}

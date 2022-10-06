import React from 'react'
const AddNotes = () => {
    return (
        <section className="msger">
            <main className="msger-chat">
                <div className="msg right-msg">
                    <div className="msg-bubble">
                        <div className="msg-text">Enter Your Note</div>
                    </div>
                </div>
            </main>
            <form className="msger-inputarea">
                <input type="text" className="msger-input" placeholder="Enter your note..." />

                <button type="submit" className="msger-send-btn">
                    ADD
                </button>
            </form>
        </section>
    )
}

export default AddNotes
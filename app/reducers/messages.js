const initialState = {
	messages: [],
	nextTimestamp: null,
	hasUnreadMsgs: false,
	topics: [
		{
			'audienceId': 'all',
			'topics': [
				{
					'topicId': 'all',
					'topicMetadata': {
						'name': 'General',
						'description': 'General messages for the whole UCSD community.'
					}
				}
			]
		}
	]
}

function messages(state = initialState, action) {
	const newState = { ...state }

	switch (action.type) {
		case 'CLEAR_MESSAGE_DATA': {
			newState.messages = []
			return newState
		}
		case 'SET_TOPICS': {
			newState.topics = [...action.topics]
			return newState
		}
		case 'SET_MESSAGES': {
			const { messages: newMessages, nextTimestamp } = action
			newState.messages = [...newMessages]
			newState.nextTimestamp = nextTimestamp
			return newState
		}
		case 'SET_MESSAGES_READ': {
			newState.hasUnreadMsgs = false
			return newState
		}
		case 'SET_MESSAGES_UNREAD': {
			newState.hasUnreadMsgs = true
			return newState
		}
		case 'CONFIRM_REGISTRATION': {
			newState.registered = true
			return newState
		}
		case 'CONFIRM_DEREGISTRATION': {
			newState.registered = false
			return newState
		}
		default:
			return state
	}
}

module.exports = messages

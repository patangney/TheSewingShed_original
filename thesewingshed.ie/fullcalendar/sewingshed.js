// JavaScript Document
	$(document).ready(function() {
	
		$('#calendar').fullCalendar({

			header: {
				left: 'title',
				center: 'agendaWeek, month',
				right: 'prev,next today'
			},

			displayEventTime: false, // don't show the time column in list view
			//change to monday 
			firstDay: 1,
			defaultView: 'month',
			editable: false,
			// http://fullcalendar.io/docs/google_calendar/
			googleCalendarApiKey: 'AIzaSyDlLMcYo5_sTxquHHwgAnjSwkldfHTx7O8',
			
			
			events: 'thesewingshed.ie_q713ingm6rdaner2fai1rms0v4@group.calendar.google.com',
			
			eventClick: function(event) {
				// opens events in a popup window
				window.open(event.url, 'gcalevent', 'width=1030,height=680');
				return false;
			},
			
			loading: function(bool) {
				$('#loading').toggle(bool);
			}
			
		});
		
		$('#calinfo').on('shown.bs.collapse', function () {
        	$('#calendar').fullCalendar('today');
    	});
		
	});
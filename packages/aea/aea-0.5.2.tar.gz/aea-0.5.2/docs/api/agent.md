<a name="aea.agent"></a>
# aea.agent

This module contains the implementation of a generic agent.

<a name="aea.agent.AgentState"></a>
## AgentState Objects

```python
class AgentState(Enum)
```

Enumeration for an agent state.

In particular, it can be one of the following states:

- AgentState.INITIATED: when the Agent object has been created.
- AgentState.CONNECTED: when the agent is connected.
- AgentState.RUNNING: when the agent is running.

<a name="aea.agent.Liveness"></a>
## Liveness Objects

```python
class Liveness()
```

Determines the liveness of the agent.

<a name="aea.agent.Liveness.__init__"></a>
#### `__`init`__`

```python
 | __init__()
```

Instantiate the liveness.

<a name="aea.agent.Liveness.is_stopped"></a>
#### is`_`stopped

```python
 | @property
 | is_stopped() -> bool
```

Check whether the liveness is stopped.

<a name="aea.agent.Liveness.start"></a>
#### start

```python
 | start() -> None
```

Start the liveness.

<a name="aea.agent.Liveness.stop"></a>
#### stop

```python
 | stop() -> None
```

Stop the liveness.

<a name="aea.agent.Agent"></a>
## Agent Objects

```python
class Agent(ABC)
```

This class provides an abstract base class for a generic agent.

<a name="aea.agent.Agent.__init__"></a>
#### `__`init`__`

```python
 | __init__(identity: Identity, connections: List[Connection], loop: Optional[AbstractEventLoop] = None, timeout: float = 1.0, loop_mode: Optional[str] = None, runtime_mode: Optional[str] = None) -> None
```

Instantiate the agent.

**Arguments**:

- `identity`: the identity of the agent.
- `connections`: the list of connections of the agent.
- `loop`: the event loop to run the connections.
- `timeout`: the time in (fractions of) seconds to time out an agent between act and react
- `loop_mode`: loop_mode to choose agent run loop.
- `runtime_mode`: runtime mode to up agent.

**Returns**:

None

<a name="aea.agent.Agent.is_running"></a>
#### is`_`running

```python
 | @property
 | is_running()
```

Get running state of the runtime and agent.

<a name="aea.agent.Agent.is_stopped"></a>
#### is`_`stopped

```python
 | @property
 | is_stopped()
```

Get running state of the runtime and agent.

<a name="aea.agent.Agent.identity"></a>
#### identity

```python
 | @property
 | identity() -> Identity
```

Get the identity.

<a name="aea.agent.Agent.multiplexer"></a>
#### multiplexer

```python
 | @property
 | multiplexer() -> Multiplexer
```

Get the multiplexer.

<a name="aea.agent.Agent.inbox"></a>
#### inbox

```python
 | @property
 | inbox() -> InBox
```

Get the inbox.

The inbox contains Envelopes from the Multiplexer.
The agent can pick these messages for processing.

<a name="aea.agent.Agent.outbox"></a>
#### outbox

```python
 | @property
 | outbox() -> OutBox
```

Get the outbox.

The outbox contains Envelopes for the Multiplexer.
Envelopes placed in the Outbox are processed by the Multiplexer.

<a name="aea.agent.Agent.name"></a>
#### name

```python
 | @property
 | name() -> str
```

Get the agent name.

<a name="aea.agent.Agent.liveness"></a>
#### liveness

```python
 | @property
 | liveness() -> Liveness
```

Get the liveness.

<a name="aea.agent.Agent.tick"></a>
#### tick

```python
 | @property
 | tick() -> int
```

Get the tick or agent loop count.

Each agent loop (one call to each one of act(), react(), update()) increments the tick.

<a name="aea.agent.Agent.timeout"></a>
#### timeout

```python
 | @property
 | timeout() -> float
```

Get the time in (fractions of) seconds to time out an agent between act and react.

<a name="aea.agent.Agent.agent_state"></a>
#### agent`_`state

```python
 | @property
 | agent_state() -> AgentState
```

Get the state of the agent.

**Raises**:

- `ValueError`: if the state does not satisfy any of the foreseen conditions.

**Returns**:

None

<a name="aea.agent.Agent.loop_mode"></a>
#### loop`_`mode

```python
 | @property
 | loop_mode() -> str
```

Get the agent loop mode.

<a name="aea.agent.Agent.main_loop"></a>
#### main`_`loop

```python
 | @property
 | main_loop() -> BaseAgentLoop
```

Get the main agent loop.

<a name="aea.agent.Agent.runtime"></a>
#### runtime

```python
 | @property
 | runtime() -> BaseRuntime
```

Get the runtime.

<a name="aea.agent.Agent.setup_multiplexer"></a>
#### setup`_`multiplexer

```python
 | setup_multiplexer() -> None
```

Set up the multiplexer

<a name="aea.agent.Agent.start"></a>
#### start

```python
 | start() -> None
```

Start the agent.

Performs the following:

- calls connect() on the multiplexer (unless in debug mode), and
- calls setup(), and
- calls start() on the liveness, and
- enters the agent main loop.

While the liveness of the agent is not stopped it continues to loop over:

- increment the tick,
- call to act(),
- sleep for specified timeout,
- call to react(),
- call to update().

**Returns**:

None

<a name="aea.agent.Agent.start_setup"></a>
#### start`_`setup

```python
 | start_setup() -> None
```

Set up Agent on start.

- connect Multiplexer
- call agent.setup
- set liveness to started

**Returns**:

None

<a name="aea.agent.Agent.stop"></a>
#### stop

```python
 | stop() -> None
```

Stop the agent.

Performs the following:

- calls stop() on the liveness, and
- calls teardown(), and
- calls disconnect() on the multiplexer.

**Returns**:

None

<a name="aea.agent.Agent.setup"></a>
#### setup

```python
 | @abstractmethod
 | setup() -> None
```

Set up the agent.

**Returns**:

None

<a name="aea.agent.Agent.act"></a>
#### act

```python
 | @abstractmethod
 | act() -> None
```

Perform actions.

**Returns**:

None

<a name="aea.agent.Agent.react"></a>
#### react

```python
 | @abstractmethod
 | react() -> None
```

React to events.

**Returns**:

None

<a name="aea.agent.Agent.update"></a>
#### update

```python
 | @abstractmethod
 | update() -> None
```

Update the internals of the agent which are not exposed to the skills.

:return None

<a name="aea.agent.Agent.teardown"></a>
#### teardown

```python
 | @abstractmethod
 | teardown() -> None
```

Tear down the agent.

**Returns**:

None

